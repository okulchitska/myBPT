WpfWindow("Micro Focus MyFlight Sample").WpfTabStrip("WpfTabStrip").Select "SEARCH ORDER"
WpfWindow("Micro Focus MyFlight Sample").WpfRadioButton("byNumberRadio").Set
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("byNumberWatermark").Set Parameter("orderNo")
WpfWindow("Micro Focus MyFlight Sample").WpfButton("SEARCH").Click
