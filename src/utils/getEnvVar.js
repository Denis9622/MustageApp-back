export const getEnvVar = (key) => {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Отсутствует переменная окружения: ${key}`);
  }
  return value;
};
