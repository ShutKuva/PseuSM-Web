export const getPageName = (currentPath: string) => {
  const splitedPath = currentPath.split("/");

  switch (splitedPath.slice(-1)[0]) {
    case "login":
      return "Login page";
    case "register":
      return "Register page";
    default:
      return "Main page";
  }
};
