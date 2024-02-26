OpenApp "C:\Program Files (x86)\Micro Focus\UFT One\samples\Flights Application\FlightsGUI.exe"
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("agentName").Set Parameter("AgentName")
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("password").Set Parameter("AgentPassword")
WpfWindow("Micro Focus MyFlight Sample").WpfButton("OK").Click
