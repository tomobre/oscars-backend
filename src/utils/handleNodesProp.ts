export function handleNodesProp(
  nodes: Object[],
  property: string
): [string[], number[]] {
  const repeatedVersionsList = nodes.map((obj: any) => {
    return property === "service_node_version"
      ? JSON.stringify(obj[property])
      : obj[property];
  });
  const counts: object = repeatedVersionsList.reduce((map, val) => {
    const prop =
      property === "service_node_version"
        ? val.replace(/\[|\]/g, "").replace(/,/g, ".")
        : val;
    map[prop] = (map[prop] || 0) + 1;
    return map;
  }, {});
  return [Object.keys(counts), Object.values(counts)];
}
