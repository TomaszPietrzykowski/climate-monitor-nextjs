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
    desc: [
      "Carbon dioxide is a greenhouse gas: a gas that absorbs and radiates heat. Warmed by sunlight, Earth’s land and ocean surfaces continuously radiate thermal infrared energy (heat). Unlike oxygen or nitrogen (which make up most of our atmosphere), greenhouse gases absorb that heat and release it gradually over time, like bricks in a fireplace after the fire goes out. Without this natural greenhouse effect, Earth’s average annual temperature would be below freezing instead of close to 60°F. But increases in greenhouse gases have tipped the Earth's energy budget out of balance, trapping additional heat and raising Earth's average temperature.",
      "Carbon dioxide is the most important of Earth’s long-lived greenhouse gases. It absorbs less heat per molecule than the greenhouse gases methane or nitrous oxide, but it’s more abundant and it stays in the atmosphere much longer. Increases in atmospheric carbon dioxide are responsible for about two-thirds of the total energy imbalance that is causing Earth's temperature to rise.",
      "Another reason carbon dioxide is important in the Earth system is that it dissolves into the ocean like the fizz in a can of soda. It reacts with water molecules, producing carbonic acid and lowering the ocean's pH. Since the start of the Industrial Revolution, the pH of the ocean's surface waters has dropped from 8.21 to 8.10. This drop in pH is called ocean acidification.",
      "A drop of 0.1 may not seem like a lot, but the pH scale is logarithmic; a 1-unit drop in pH means a tenfold increase in acidity. A change of 0.1 means a roughly 30% increase in acidity. Increasing acidity interferes with the ability of marine life to extract calcium from the water to build their shells and skeletons.",
    ],
    gradient: "co2",
    sourceLink:
      "https://www.climate.gov/news-features/understanding-climate/climate-change-atmospheric-carbon-dioxide",
  },
  ch4: {
    header: "Methane CH4",
    scopes: [
      { title: "Annual CH4", endpoint: "annual_ch4_gl" },
      { title: "Annual CH4 growth rate", endpoint: "annual_ch4_gr_gl" },
      { title: "Monthly CH4", endpoint: "monthly_ch4_gl" },
    ],
    desc: [
      "Methane in the Earth's atmosphere is a strong greenhouse gas with a global warming potential (GWP) 84 times greater than CO2 in a 20-year time frame; methane is not as persistent a gas as CO2 (assuming no change in carbon sequestration rates) and tails off to about GWP of 28 for a 100-year time frame. This means that a methane emission is projected to have 28 times the impact on temperature of a carbon dioxide emission of the same mass over the following 100 years assuming no change in the rates of carbon sequestration. Methane has a large effect but for a relatively brief period, having an estimated mean half-life of 9.1 years in the atmosphere, whereas carbon dioxide is currently given an estimated mean lifetime of over 100 years.",
      "The balance between sources and sinks of methane is not yet fully understood. The IPCC Working Group I stated in chapter 2 of the Fourth Assessment Report that there are large uncertainties in the current bottom-up estimates of components of the global source, and the balance between sources and sinks is not yet well known. The most important sink in the methane cycle is reaction with the hydroxyl radical, which is produced photochemically in the atmosphere. Production of this radical is not fully understood and has a large effect on atmospheric concentrations. This uncertainty is exemplified by observations that have shown between the year 2000 and 2006 increases in atmospheric concentration of methane ceased, for reasons still being investigated.",
      "Any process that results in the production of methane and its release into the atmosphere can be considered a 'source'. The two main processes that are responsible for methane production occur as a result of microorganisms anaerobically converting organic compounds into methane. Slightly over half of the total emission is due to human activity. Since the Industrial Revolution humans have had a major impact on concentrations of atmospheric methane, increasing atmospheric concentrations roughly 250%. According to the 2021 IPCC report, 30 - 50 percent of the current rise in temperatures is caused by emissions of methane, and reducing methane is a fast way of climate change mitigation.",
    ],
    gradient: "ch4",
    sourceLink:
      "https://en.wikipedia.org/wiki/Atmospheric_methane#Emissions_accounting_of_methane",
  },
  sf6: {
    header: "Sulfur hexafluoride SF6",
    scopes: [
      { title: "Annual SF6", endpoint: "annual_sf6_gl" },
      { title: "Annual SF6 growth rate", endpoint: "annual_sf6_gr_gl" },
      { title: "Monthly SF6", endpoint: "monthly_sf6_gl" },
    ],
    desc: [
      "Category (sf6) description line/pargraph 1",
      "Category (sf6) description line/pargraph 2",
      "Category (sf6) description line/pargraph 3",
    ],
    gradient: "sf6",
  },
  n2o: {
    header: "Dinitrogen oxide N2O",
    scopes: [
      { title: "Annual N2O", endpoint: "annual_n2o_gl" },
      { title: "Annual N2O growth rate", endpoint: "annual_n2o_gr_gl" },
      { title: "Monthly N2O", endpoint: "monthly_n2o_gl" },
    ],
    desc: [
      "Category (n2o) description line/pargraph 1",
      "Category (n2o) description line/pargraph 2",
      "Category (n2o) description line/pargraph 3",
    ],
    gradient: "n2o",
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
      // {
      //   title: "Daily land anomaly average",
      //   endpoint: "daily_land_temp_anomaly_avg",
      // },
      // {
      //   title: "Daily land anomaly maximum",
      //   endpoint: "daily_land_temp_anomaly_max",
      // },
      // {
      //   title: "Daily land anomaly minimum",
      //   endpoint: "daily_land_temp_anomaly_min",
      // },
    ],
    desc: [
      "Category (temperatures) description line/pargraph 1",
      "Category (temperatures) description line/pargraph 2",
      "Category (temperatures) description line/pargraph 3",
    ],
    gradient: "temperatures",
  },
  sealevels: {
    header: "Sea levels",
    scopes: [
      { title: "Global ocean mass", endpoint: "global_ocean_mass" },
      { title: "Trend in sea levels", endpoint: "sea_level_trend" },
    ],
    desc: [
      "Category (sealevels) description line/pargraph 1",
      "Category (sealevels) description line/pargraph 2",
      "Category (sealevels) description line/pargraph 3",
    ],
    gradient: "sealevels",
  },
  glaciers: {
    header: "Glaciers",
    scopes: [
      { title: "Antarctica ice mass", endpoint: "antarctica_ice_mass" },
      { title: "Greenland ice mass", endpoint: "greenland_ice_mass" },
    ],
    desc: [
      "Category (glaciers) description line/pargraph 1",
      "Category (glaciers) description line/pargraph 2",
      "Category (glaciers) description line/pargraph 3",
    ],
    gradient: "glaciers",
  },
}
