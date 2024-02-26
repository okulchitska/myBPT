WpfWindow("Micro Focus MyFlight Sample").WpfEdit("passengerName").Set Parameter("PassangerName")
WpfWindow("Micro Focus MyFlight Sample").WpfButton("ORDER").Click
 Parameter("orderNo") = WpfWindow("Micro Focus MyFlight Sample").WpfObject("Order completed").GetVisibleText()
WpfWindow("Micro Focus MyFlight Sample").WpfButton("NEW SEARCH_2").Click
