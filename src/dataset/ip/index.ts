import { fetchServiceNodes } from "../services";
import { ASN } from "../../models/ASN";
import { IP } from "../../models/IP";
import { Country } from "../../models/Country";
import { handleNodesProp } from "../../utils/handleNodesProp";
const ApiError = require("../../utils/ApiError");
const httpStatus = require("http-status");
// @ts-ignore
import { allData } from "geo-from-ip";

export default async function IPsUpdate() {
  try {
    const nodes = await fetchServiceNodes();
    const SNByIps = handleNodesProp(
      nodes.result.service_node_states,
      "public_ip"
    );
    const IpsGeoInfo = SNByIps[0].map((ip) => {
      return allData(ip);
    });

    for (let i = 0; i < SNByIps[0].length; i++) {
      const IPinDB = await IP.findOne({
        where: {
          ip: SNByIps[0][i],
        },
      });

      if (!IPinDB) {
        const newIP = new IP();

        const ASNselected = await ASN.findOne({
          where: {
            name: IpsGeoInfo[i].asn,
          },
        });

        if (!ASNselected) {
          const newASN = new ASN();
          newASN.name = IpsGeoInfo[i].asn;
          newASN.ips = [];
          await newASN.save().catch((error) => {
            throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, error.message);
          });
          newIP.ASN = newASN;
        } else {
          newIP.ASN = ASNselected;
        }

        const CountrySelected = await Country.findOne({
          relations: ["ips"],
          where: {
            name: IpsGeoInfo[i].country,
          },
        });

        if (!CountrySelected) {
          const newCountry = new Country();
          newCountry.name = IpsGeoInfo[i].country;
          newCountry.ips = [];
          await newCountry.save().catch((error) => {
            throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, error.message);
          });
          newIP.country = newCountry;
        } else {
          newIP.country = CountrySelected;
        }

        newIP.ip = SNByIps[0][i];
        newIP.SNcount = SNByIps[1][i];
        newIP.city = IpsGeoInfo[i].city || null;
        newIP.lattitude = IpsGeoInfo[i]?.location?.latitude || null;
        newIP.longitude = IpsGeoInfo[i]?.location?.longitude || null;
        newIP.accuracyRadius = IpsGeoInfo[i]?.location?.accuracy_radius || null;

        await newIP.save().catch((error) => {
          throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, error.message);
        });
      } else {
        if (IPinDB.SNcount !== SNByIps[1][i]) {
          IPinDB.SNcount = SNByIps[1][i];
          await IPinDB.save().catch((error) => {
            throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, error.message);
          });
        }
      }
    }
  } catch (err) {
    console.log(err);
  }
}
