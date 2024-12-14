const removeFields = (obj: any = {}, fields: string[] = []) => {
  let newObj = { ...obj };
  for (let i = 0; i < fields.length; i++) {
    delete newObj[fields[i]];
  }
  return newObj;
};

export {removeFields}