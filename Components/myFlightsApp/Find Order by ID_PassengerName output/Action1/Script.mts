WpfWindow("Micro Focus MyFlight Sample").WpfTabStrip("WpfTabStrip").Select "SEARCH ORDER"
WpfWindow("Micro Focus MyFlight Sample").WpfRadioButton("byNumberRadio").Set
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("byNumberWatermark").Set Parameter("OrderNo")
WpfWindow("Micro Focus MyFlight Sample").WpfButton("SEARCH").Click
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("passengerName").Output CheckPoint("passengerName")
WpfWindow("Micro Focus MyFlight Sample").WpfButton("NEW SEARCH_2").Click
