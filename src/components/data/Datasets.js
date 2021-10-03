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
      "According to the Intergovernmental Panel on Climate Change, SF6 is the most potent greenhouse gas that has been evaluated, with a global warming potential of 23,900 times that of CO2 when compared over a 100-year period. Sulfur hexafluoride is inert in the troposphere and stratosphere and is extremely long-lived, with an estimated atmospheric lifetime of 800–3,200 years.",
      "Measurements of SF6 show that its global average mixing ratio has increased from a steady base of about 54 parts per quadrillion prior to industrialization, to over 10 parts per trillion (ppt) as of April 2020, and is increasing by about 0.35 ppt (3.5 percent) per year. Average global SF6 concentrations increased by about seven percent per year during the 1980s and 1990s, mostly as the result of its use in magnesium production, and by electrical utilities and electronics manufacturers. Given the small amounts of SF6 released compared to carbon dioxide, its overall individual contribution to global warming is estimated to be less than 0.2 percent, however the collective contribution of it and similar man-made halogenated gases has reached about 10 percent as of year 2020. Alternatives are being tested.",
    ],
    gradient: "sf6",
    sourceLink: "https://en.wikipedia.org/wiki/Sulfur_hexafluoride",
  },
  n2o: {
    header: "Dinitrogen oxide N2O",
    scopes: [
      { title: "Annual N2O", endpoint: "annual_n2o_gl" },
      { title: "Annual N2O growth rate", endpoint: "annual_n2o_gr_gl" },
      { title: "Monthly N2O", endpoint: "monthly_n2o_gl" },
    ],
    desc: [
      "Nitrous oxide (dinitrogen monoxide) has significant global warming potential as a greenhouse gas. On a per-molecule basis, considered over a 100-year period, nitrous oxide has 265 times the atmospheric heat-trapping ability of carbon dioxide (CO2). However, because of its low concentration (less than 1/1,000 of that of CO2), its contribution to the greenhouse effect is less than one third that of carbon dioxide, and also less than water vapour and methane. On the other hand, since 38% or more of the N2O entering the atmosphere is the result of human activity, control of nitrous oxide is considered part of efforts to curb greenhouse gas emissions.",
      "Nitrous oxide is released into the atmosphere through agriculture, when farmers add nitrogen-based fertilizers onto the fields, through the breakdown of animal manure. Approximately 79 percent of all nitrous oxide released in the United States came from nitrogen fertilization. Nitrous oxide is also released as a by-product of burning fossil fuel, though the amount released depends on which fuel was used. It is also emitted through the manufacture of nitric acid, which is used in the synthesis of nitrogen fertilizers. The production of adipic acid, a precursor to nylon and other synthetic clothing fibres, also releases nitrous oxide. The total amount of nitrous oxide released that is of human origins is about 40 percent.",
      "Nitrous oxide has also been implicated in thinning the ozone layer. A 2009 study suggested that N2O emission was the single most important ozone-depleting emission and it was expected to remain the largest throughout the 21st century.",
    ],
    gradient: "n2o",
    sourceLink: "https://en.wikipedia.org/wiki/Nitrous_oxide",
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
    ],
    desc: [
      "The largest driver of warming is the emission of gases that create a greenhouse effect, of which more than 90% are carbon dioxide (CO2) and methane. Fossil fuel burning (coal, oil, and natural gas) for energy consumption is the main source of these emissions, with additional contributions from agriculture, deforestation, and manufacturing. The human cause of climate change is not disputed by any scientific body of national or international standing. Temperature rise is accelerated or tempered by climate feedbacks, such as loss of sunlight-reflecting snow and ice cover, increased water vapour (a greenhouse gas itself), and changes to land and ocean carbon sinks.",
      "Temperature rise on land is about twice the global average increase, leading to desert expansion and more common heat waves and wildfires. Temperature rise is also amplified in the Arctic, where it has contributed to melting permafrost, glacial retreat and sea ice loss. Warmer temperatures are increasing rates of evaporation, causing more intense storms and weather extremes. Impacts on ecosystems include the relocation or extinction of many species as their environment changes, most immediately in coral reefs, mountains, and the Arctic. Climate change threatens people with food insecurity, water scarcity, flooding, infectious diseases, extreme heat, economic losses, and displacement. These human impacts have led the World Health Organization to call climate change the greatest threat to global health in the 21st century. Even if efforts to minimise future warming are successful, some effects will continue for centuries, including rising sea levels, rising ocean temperatures, and ocean acidification.",
      "Many of these impacts are already felt at the current level of warming, which is about 1.2 °C (2.2 °F). The Intergovernmental Panel on Climate Change has issued a series of reports that project significant increases in these impacts as warming continues to 1.5 °C (2.7 °F) and beyond. Additional warming also increases the risk of triggering critical thresholds called tipping points.",
    ],
    gradient: "temperatures",
    sourceLink: "https://en.wikipedia.org/wiki/Climate_change",
  },
  sealevels: {
    header: "Sea levels",
    scopes: [
      { title: "Trend in sea levels", endpoint: "sea_level_trend" },
      { title: "Global ocean mass", endpoint: "global_ocean_mass" },
    ],
    desc: [
      "Tide gauge measurements show that the current global sea level rise began at the start of the 20th century. Between 1900 and 2017, the globally averaged sea level rose by 16–21 cm (6.3–8.3 in), or 1.4–1.8 mm (0.055–0.071 in) per year. More precise data gathered from satellite radar measurements reveal an accelerating rise of 7.5 cm (3.0 in) from 1993 to 2017, for an average rate of 31 mm (1.22 in) per decade. This acceleration is due mostly to climate change, which is driving thermal expansion of seawater and the melting of land-based ice sheets and glaciers. Between 1993 and 2018, thermal expansion of the oceans contributed 42% to sea level rise; the melting of temperate glaciers 21%, Greenland 15%, and Antarctica 8%. Climate scientists expect the rate to further accelerate during the 21st century, with the latest measurements saying the sea levels are currently rising by 3.6 mm per year",
      "Projecting future sea level is challenging, due to the complexity of many aspects of the climate system and to time lags in sea level reactions to Earth temperature changes. As climate research into past and present sea levels leads to improved computer models, projections have consistently increased. In 2007, the Intergovernmental Panel on Climate Change projected a high end estimate of 60 cm (2 ft) through 2099, but their 2014 report raised the high-end estimate to about 90 cm (3 ft). A number of later studies have concluded that a global sea level rise of 200 to 270 cm (6.6 to 8.9 ft) this century is 'physically plausible'. A conservative estimate of the long-term projections is that each Celsius degree of temperature rise triggers a sea level rise of approximately 2.3 meters (4.2 ft/degree Fahrenheit) over a period of two millennia: an example of climate inertia. In February 2021, a paper published in Ocean Science suggested that past projections for global sea level rise by 2100 reported by the IPCC were likely conservative, and that sea levels will rise more than previously expected",
      "The sea level will not rise uniformly everywhere on Earth, and it will even drop slightly in some locations, such as the Arctic. Local factors include tectonic effects and subsidence of the land, tides, currents and storms. Sea level rises can affect human populations considerably in coastal and island regions. Widespread coastal flooding is expected with several degrees of warming sustained for millennia. Further effects are higher storm-surges and more dangerous tsunamis, displacement of populations, loss and degradation of agricultural land and damage in cities. Natural environments like marine ecosystems are also affected, with fish, birds and plants losing parts of their habitat.",
    ],
    gradient: "sealevels",
    sourceLink: "https://en.wikipedia.org/wiki/Sea_level_rise",
  },
  glaciers: {
    header: "Glaciers",
    scopes: [
      { title: "Antarctica ice mass", endpoint: "antarctica_ice_mass" },
      { title: "Greenland ice mass", endpoint: "greenland_ice_mass" },
    ],
    desc: [
      "The mass balance, or difference between accumulation and ablation (melting and sublimation), of a glacier is crucial to its survival. Climate change may cause variations in both temperature and snowfall, resulting in changes in mass balance. A glacier with a sustained negative balance loses equilibrium and retreats. A sustained positive balance is also out of equilibrium and will advance to reestablish equilibrium. Currently, nearly all glaciers have a negative mass balance and are retreating. About 99 percent of all freshwater ice is in the great ice sheets of polar and subpolar Antarctica and Greenland. These continuous continental-scale ice sheets, 3 km (1.9 mi) or more in thickness, cap much of the polar and subpolar land masses. Like rivers flowing from an enormous lake, numerous outlet glaciers transport ice from the margins of the ice sheet to the ocean.",
      "In Greenland, glacier retreat has been observed in outlet glaciers, resulting in an increase of the ice flow rate and destabilization of the mass balance of the ice sheet that is their source. The net loss in volume and hence sea level contribution of the Greenland Ice Sheet has doubled in recent years from 90 km3 per year in 1996 to 220 km3 per year in 2005. Researchers also noted that the acceleration was widespread affecting almost all glaciers south of 70N by 2005. The period since 2000 has brought retreat to several very large glaciers that had long been stable. Three glaciers that have been researched—Helheim Glacier, Kangerdlugssuaq Glacier, and Jakobshavn Isbræ—jointly drain more than 16% of the Greenland Ice Sheet. In the case of Helheim Glacier, researchers used satellite images to determine the movement and retreat of the glacier. Satellite images and aerial photographs from the 1950s and 1970s show that the front of the glacier had remained in the same place for decades. In 2001 the glacier began retreating rapidly, and by 2005 the glacier had retreated a total of 7.2 km, accelerating from 20 m (66 ft) per day to 35 m (115 ft) per day during that period.",
      "Antarctica is intensely cold and arid. Most of the world's freshwater ice is contained within its sheets. Its most dramatic example of glacier retreat is the loss of large sections of the Larsen Ice Shelf on the Antarctic Peninsula. The recent collapse of Wordie Ice Shelf, Prince Gustav Ice Shelf, Mueller Ice Shelf, Jones Ice Shelf, Larsen-A and Larsen-B Ice Shelf on the Antarctic Peninsula has raised awareness of how dynamic ice shelf systems are. The Antarctic sheet is the largest known single mass of ice. It covers almost 14 million km2 and some 30 million km3 of ice. Around 90% of the fresh water on the planet's surface is held in this area and if melted would raise sea levels by 58 metres. The continent-wide average surface temperature trend of Antarctica is positive and significant at > 0.05 °C/decade since 1957.",
    ],
    gradient: "glaciers",
    sourceLink: "https://en.wikipedia.org/wiki/Retreat_of_glaciers_since_1850",
  },
}
