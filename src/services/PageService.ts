export const getPageName = (currentPath: string) => {
  const splitedPath = currentPath.split("/");

  switch (splitedPath.slice(-1)[0]) {
    case "login":
      return "Login page";
    case "register":
      return "Register page";
    case "user":
      return "User page";
    default:
      return "Main page";
  }
};
