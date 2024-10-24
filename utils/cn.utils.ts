type ParamsItem = string | { [key: string]: boolean | undefined } | undefined;

// 🤮 (it works tho)
const cn = (...params: ParamsItem[]): string | undefined => {
  if (!Array.isArray(params)) {
    return params;
  }

  let result = '';

  params.forEach((param) => {
    if (!param) {
      return;
    }

    if (typeof param === 'string') {
      result += ` ${param}`;
    } else {
      const entries = Object.entries(param);

      entries.forEach(([key, value]) => {
        if (value) {
          result += ` ${key}`;
        }
      });
    }
  });

  return result;
};

export default cn;
