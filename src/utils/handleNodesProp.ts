import { Node } from "../types/nodes";

export function handleNodesProp(
  nodes: Node[],
  property: string
): [string[], number[]] {
  const repeatedVersionsList = nodes.map((obj: Node) => {
    return property === "service_node_version"
      ? JSON.stringify(obj[property])
      : (obj as any)[property];
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
