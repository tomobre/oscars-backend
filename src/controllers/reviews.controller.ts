export {};
/** Node Modules */
const httpStatus = require("http-status");

/** Custom Modules */
const catchAsync = require("../utils/catchAsync");
const ApiError = require("../utils/ApiError");

/** Schemas */
import { Reviews } from "../models/Reviews";
import { Client } from "../models/Client";
import { Coach } from "../models/Coach";
import { User } from "../models/User";

const getAll = catchAsync(async (req: any, res: any) => {
  let { coach, creator } = req.body;
  const result = await Reviews.find({
    where: {
      coach: coach,
    },
    relations: ["user"],
  });
  res.status(httpStatus.OK).json(result);
});

const post = catchAsync(async (req: any, res: any) => {
  let { comment, review, coachId, name, clientId } = req.body;

  const clientSelected: any = await Client.findOne({
    where: {
      id: clientId,
    },
  });

  const userFromClientSelected: any = await User.findOne({
    where: {
      isClient: clientSelected,
    },
    relations: ["files"],
  });

  console.log("encontro el user", userFromClientSelected);
  const coachSelected: any = await Coach.findOne({
    where: {
      id: coachId,
    },
    relations: ["receivedReviews"],
  });

  const newReview = new Reviews();
  newReview.review = review;
  newReview.comment = comment;
  newReview.name = name;
  newReview.coach = coachSelected;
  newReview.client = clientSelected;
  newReview.picture = userFromClientSelected.files[0].file;

  await newReview.save().catch((error) => {
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, error.message);
  });

  let finalCoach: any = await Coach.findOne({
    where: {
      id: coachId,
    },
    relations: ["receivedReviews"],
  });

  console.log("coachselected despues de new reviw", finalCoach);

  if (finalCoach.calification === null) {
    finalCoach.calification = Math.round(review);
    console.log(
      "se deja priemra review puntaje, osea era null",
      Math.round(review)
    );
  } else {
    let average =
      finalCoach.receivedReviews.reduce((r: any, c: any) => r + c.review, 0) /
      finalCoach.receivedReviews.length;
    console.log("nuevo average de review:", average);
    finalCoach.calification = Math.round(average);
  }

  console.log("ultimo", finalCoach);

  await finalCoach.save().catch((error: any) => {
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, error.message);
  });

  res.status(httpStatus.OK).json(newReview);
});

const put = catchAsync(async (req: any, res: any) => {
  res.status(httpStatus.OK).json();
});

const remove = catchAsync(async (req: any, res: any) => {
  let { id } = req.body;
  const delReview = await Reviews.findOne({
    where: {
      id: id,
    },
  });

  if (!delReview)
    throw new ApiError(httpStatus.BAD_REQUEST, "The review does not exist");

  delReview.remove();

  res.status(httpStatus.OK).json(delReview);
});

module.exports = {
  getAll,
  post,
  put,
  remove,
};
