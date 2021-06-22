exports.datasets = {
  co2: {
    header: "Carbon dioxide CO2",
    scopes: [
      { title: "Annual CO2 Mauna Loa", endpoint: "annual_co2_ml" },
      { title: "Annual CO2 Global", endpoint: "annual_co2_gl" },
      {
        title: "CO2 increase Mauna Loa",
        endpoint: "annual_co2_increase_ml",
      },
      { title: "CO2 increase Global", endpoint: "annual_co2_increase_gl" },
      { title: "Monthly CO2 Mauna Loa", endpoint: "monthly_co2_ml" },
      { title: "Monthly CO2 Global", endpoint: "monthly_co2_gl" },
      { title: "Weekly CO2 Mauna Loa", endpoint: "weekly_co2" },
      { title: "Daily CO2 Mauna Loa", endpoint: "daily_co2" },
    ],
  },
  ch4: {
    header: "Methane CH4",
    scopes: [
      { title: "Annual CH4", endpoint: "annual_ch4_gl" },
      { title: "Annual CH4 growth rate", endpoint: "annual_ch4_gr_gl" },
      { title: "Monthly CH4", endpoint: "monthly_ch4_gl" },
    ],
  },
  sf6: {
    header: "Sulfur hexafluoride SF6",
    scopes: [
      { title: "Annual SF6", endpoint: "annual_sf6_gl" },
      { title: "Annual SF6 growth rate", endpoint: "annual_sf6_gr_gl" },
      { title: "Monthly SF6", endpoint: "monthly_sf6_gl" },
    ],
  },
  n2o: {
    header: "Dinitrogen oxide N2O",
    scopes: [
      { title: "Annual N2O", endpoint: "annual_n2o_gl" },
      { title: "Annual N2O growth rate", endpoint: "annual_n2o_gr_gl" },
      { title: "Monthly N2O", endpoint: "monthly_n2o_gl" },
    ],
  },
  temperatures: {
    header: "Temperatures",
    scopes: [
      { title: "Annual land average", endpoint: "annual_land_temp_avg" },
      { title: "Annual land maximum", endpoint: "annual_land_temp_max" },
      { title: "Annual land minimum", endpoint: "annual_land_temp_min" },
      {
        title: "Annual land anomaly average",
        endpoint: "annual_land_temp_anomaly_avg",
      },
      {
        title: "Annual land anomaly maximum",
        endpoint: "annual_land_temp_anomaly_max",
      },
      {
        title: "Annual land anomaly minimum",
        endpoint: "annual_land_temp_anomaly_min",
      },
      { title: "Annual land and ocean", endpoint: "annual_loc_temp" },
      {
        title: "Annual land and ocean anomaly",
        endpoint: "annual_loc_temp_anomaly",
      },
      {
        title: "Monthly land average",
        endpoint: "monthly_land_temp_avg",
      },
      { title: "Monthly land maximum", endpoint: "monthly_land_temp_max" },
      {
        title: "Monthly land minimum",
        endpoint: "monthly_land_temp_min",
      },
      {
        title: "Monthly land anomaly average",
        endpoint: "monthly_land_temp_anomaly_avg",
      },
      {
        title: "Monthly land anomaly maximum",
        endpoint: "monthly_land_temp_anomaly_max",
      },
      {
        title: "Monthly land anomaly minimum",
        endpoint: "monthly_land_temp_anomaly_min",
      },
      {
        title: "Monthly land and ocean",
        endpoint: "monthly_loc_temp",
      },
      {
        title: "Monthly land and ocean anomaly",
        endpoint: "monthly_loc_temp_anomaly",
      },
      {
        title: "Daily land anomaly average",
        endpoint: "daily_land_temp_anomaly_avg",
      },
      {
        title: "Daily land anomaly maximum",
        endpoint: "daily_land_temp_anomaly_max",
      },
      {
        title: "Daily land anomaly minimum",
        endpoint: "daily_land_temp_anomaly_min",
      },
    ],
  },
  sealevels: {
    header: "Sea levels",
    scopes: [
      { title: "Global ocean mass", endpoint: "global_ocean_mass" },
      { title: "Trend in sea levels", endpoint: "sea_level_trend" },
    ],
  },
  glaciers: {
    header: "Glaciers",
    scopes: [
      { title: "Antarctica ice mass", endpoint: "antarctica_ice_mass" },
      { title: "Greenland ice mass", endpoint: "greenland_ice_mass" },
    ],
  },
};
