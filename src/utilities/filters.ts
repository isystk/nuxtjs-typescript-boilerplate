export const shadowingName = function(name) {
  if (!name) {
    return "_";
  }
  if (!name.includes("[")) {
    return "_" + name;
  }

  const names = name.split("[");
  const last = names.pop();
  names.push("_" + last);
  return names.join("[");
};
