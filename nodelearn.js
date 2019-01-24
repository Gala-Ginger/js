function ucFirst(name) {
  if (!name) return name;
 return name[0].toUpperCase() + name.slice(1);
}
console.log(ucFirst(""))
