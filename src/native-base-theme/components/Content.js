import variable from "./../variables/platform";

export default (variables = variable) => {
  const contentTheme = {
    ".padder": {
      padding: variables.contentPadding
    },
    flex: 1,
    backgroundColor: "#D6D3D1",
    "NativeBase.Segment": {
      borderWidth: 0,
      backgroundColor: "#D6D3D1"
    }
  };

  return contentTheme;
};
