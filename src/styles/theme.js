const globalTheme = {
  switchWidth: "28px",
  switchHeight: "16px",
  switchPadding: "2.4px",
  colorContrastLow: "#d3d3d4",
  colorWhite: "#FFF",
  switchColorPrimary: "#fe3456",
  switchAnimationDuration: "0.2s",
  gradient:
    "linear-gradient(122deg, rgba(128,74,216,1) 0%, rgba(98,75,217,1) 100%)",
  colorGray: "#4e4e4e",
};

export const lightTheme = {
  primary: "#fefefe",
  secondary: "#fafafc",
  iconColor: "#48525c",
  contrastColor: "#eaeaea",
  hoverColor: "#f4f4f4",
  textColor: "#161617",
  subTextColor: "#666",
  searchInput: "#f0f2f4",
  roundColor: "rgba(0, 0, 0, 0.02)",
  borderColor: "#ebeced",
  toastColor: "#fff",
  detailLinear:
    "linear-gradient(to right, rgba(250, 250, 252, 1) 200px, rgba(250, 250, 252, 0.20) 100%)",
  detailLinearSmall:
    "linear-gradient(360deg, rgba(255, 255, 255, 1) 200px, rgba(255, 255, 255, 0.20) 100%)",
  ...globalTheme,
};

export const darkTheme = {
  primary: "#2d2d30",
  secondary: "#1e1e1e",
  iconColor: "#fefefe",
  contrastColor: "#444444",
  hoverColor: "#252526",
  textColor: "#fefefe",
  subTextColor: "#999",
  searchInput: "#252526",
  roundColor: "rgba(0, 0, 0, 0.1)",
  borderColor: "rgba(255,255,255,.1)",
  toastColor: "#181818",
  detailLinear:
    "linear-gradient(to right , rgba(30, 30, 30, 1) 200px, rgba(30, 30, 30, 0.34) 100%)",
  detailLinearSmall:
    "linear-gradient(360deg , rgba(0, 0, 0, 1) 200px, rgba(0, 0, 0, 0.34) 100%)",
  ...globalTheme,
};
