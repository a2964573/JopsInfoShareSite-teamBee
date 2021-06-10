//old
//itRedirect
var itCheck,machaCheck,medicCheck,eduCheck;
var itGameRedirect=document.querySelector("#itGameRedirect");
var itMobileRedirect=document.querySelector("#itMobileRedirect");
var itNetworkRedirect=document.querySelector("#itNetworkRedirect");
var itDbaRedirect=document.querySelector("#itDbaRedirect");
function itRedirectTransform(){
	itGameRedirect.classList.toggle("itGameRedirectMove");
	itMobileRedirect.classList.toggle("itMobileRedirectMove");
	itNetworkRedirect.classList.toggle("itNetworkRedirectMove");
	itDbaRedirect.classList.toggle("itDbaRedirectMove");
}
//machaRedirect
var machaErectionRedirect=document.querySelector("#machaErectionRedirect");
var machaShipRedirect=document.querySelector("#machaShipRedirect");
var machaAirlineRedirect=document.querySelector("#machaAirlineRedirect");
var machaHelicopterRedirect=document.querySelector("#machaHelicopterRedirect");
function machaRedirectTransform(){
	machaErectionRedirect.classList.toggle("machaErectionRedirectMove");
	machaShipRedirect.classList.toggle("machaShipRedirectMove");
	machaAirlineRedirect.classList.toggle("machaAirlineRedirectMove");
	machaHelicopterRedirect.classList.toggle("machaHelicopterRedirectMove");
}
//medicRedirect
var medicRecorderRedirect=document.querySelector("#medicRecorderRedirect");
var medicAnimalRedirect=document.querySelector("#medicAnimalRedirect");
var medicNerveRedirect=document.querySelector("#medicNerveRedirect");
var medicEmergencyRedirect=document.querySelector("#medicEmergencyRedirect");
function medicRedirectTransform(){
	medicRecorderRedirect.classList.toggle("medicRecorderRedirectMove");
	medicAnimalRedirect.classList.toggle("medicAnimalRedirectMove");
	medicNerveRedirect.classList.toggle("medicNerveRedirectMove");
	medicEmergencyRedirect.classList.toggle("medicEmergencyRedirectMove");
}
//eduRedirect
var eduKidRedirect=document.querySelector("#eduKidRedirect");
var eduSpecialRedirect=document.querySelector("#eduSpecialRedirect");
var eduAfterRedirect=document.querySelector("#eduAfterRedirect");
var eduResearcherRedirect=document.querySelector("#eduResearcherRedirect");
function eduRedirectTransform(){
	eduKidRedirect.classList.toggle("eduKidRedirectMove");
	eduSpecialRedirect.classList.toggle("eduSpecialRedirectMove");
	eduAfterRedirect.classList.toggle("eduAfterRedirectMove");
	eduResearcherRedirect.classList.toggle("eduResearcherRedirectMove");
}
//다른 곳 누르면 꺼지게하기
window.onclick=function(event){
	//정보기술
	if(!event.target.matches("#listItBtn")){
		var itGameRedirectMove=document.getElementsByClassName("itGameRedirectMove");
		var itMobileRedirectMove=document.getElementsByClassName("itMobileRedirectMove");
		var itNetworkRedirectMove=document.getElementsByClassName("itNetworkRedirectMove");
		var itDbaRedirectMove=document.getElementsByClassName("itDbaRedirectMove");
		for(var i=0; i<itGameRedirectMove.length; i++){
			var itGameRedirectMoveArr=itGameRedirectMove[i];
			var itMobileRedirectMoveArr=itMobileRedirectMove[i];
			var itNetworkRedirectMoveArr=itNetworkRedirectMove[i];
			var itDbaRedirectMoveArr=itDbaRedirectMove[i];
			if(itGameRedirectMoveArr.classList.contains("itGameRedirectMove")){
				itGameRedirectMoveArr.classList.remove("itGameRedirectMove");
				itMobileRedirectMoveArr.classList.remove("itMobileRedirectMove");
				itNetworkRedirectMoveArr.classList.remove("itNetworkRedirectMove");
				itDbaRedirectMoveArr.classList.remove("itDbaRedirectMove");
			}
		}
	}
	//기계공학
	else if(!event.target.matches("#listMachaBtn")){
		var machaErectionRedirectMove=document.getElementsByClassName("machaErectionRedirectMove");
		var machaShipRedirectMove=document.getElementsByClassName("machaShipRedirectMove");
		var machaAirlineRedirectMove=document.getElementsByClassName("machaAirlineRedirectMove");
		var machaHelicopterRedirectMove=document.getElementsByClassName("machaHelicopterRedirectMove");
		for(var i=0; i<machaErectionRedirectMove.length; i++){
			var machaErectionRedirectMoveArr=machaErectionRedirectMove[i];
			var machaShipRedirectMoveArr=machaShipRedirectMove[i];
			var machaAirlineRedirectMoveArr=machaAirlineRedirectMove[i];
			var machaHelicopterRedirectMoveArr=machaHelicopterRedirectMove[i];
			if(machaErectionRedirectMoveArr.classList.contains("machaErectionRedirectMove")){
				machaErectionRedirectMoveArr.classList.remove("machaErectionRedirectMove");
				machaShipRedirectMoveArr.classList.remove("machaShipRedirectMove");
				machaAirlineRedirectMoveArr.classList.remove("machaAirlineRedirectMove");
				machaHelicopterRedirectMoveArr.classList.remove("machaHelicopterRedirectMove");
			}
		}
	}
	//의학
	else if(!event.target.matches("#listMedicBtn")){
		var medicRecorderRedirectMove=document.getElementsByClassName("medicRecorderRedirectMove");
		var medicAnimalRedirectMove=document.getElementsByClassName("medicAnimalRedirectMove");
		var medicNerveRedirectMove=document.getElementsByClassName("medicNerveRedirectMove");
		var medicEmergencyRedirectMove=document.getElementsByClassName("medicEmergencyRedirectMove");
		for(var i=0; i<medicRecorderRedirectMove.length; i++){
			var medicRecorderRedirectMoveArr=medicRecorderRedirectMove[i];
			var medicAnimalRedirectMoveArr=medicAnimalRedirectMove[i];
			var medicNerveRedirectMoveArr=medicNerveRedirectMove[i];
			var medicEmergencyRedirectMoveArr=medicEmergencyRedirectMove[i];
			if(medicRecorderRedirectMoveArr.classList.contains("medicRecorderRedirectMove")){
				medicRecorderRedirectMoveArr.classList.remove("medicRecorderRedirectMove");
				medicAnimalRedirectMoveArr.classList.remove("medicAnimalRedirectMove");
				medicNerveRedirectMoveArr.classList.remove("medicNerveRedirectMove");
				medicEmergencyRedirectMoveArr.classList.remove("medicEmergencyRedirectMove");
			}
		}
	}
	//교육학
	else if(!event.target.matches("#listEduBtn")){
		var eduKidRedirectMove=document.getElementsByClassName("eduKidRedirectMove");
		var eduSpecialRedirectMove=document.getElementsByClassName("eduSpecialRedirectMove");
		var eduAfterRedirectMove=document.getElementsByClassName("eduAfterRedirectMove");
		var eduResearcherRedirectMove=document.getElementsByClassName("eduResearcherRedirectMove");
		for(var i=0; i<eduKidRedirectMove.length; i++){
			var eduKidRedirectMoveArr=eduKidRedirectMove[i];
			var eduSpecialRedirectMoveArr=eduSpecialRedirectMove[i];
			var eduAfterRedirectMoveArr=eduAfterRedirectMove[i];
			var eduResearcherRedirectMoveArr=eduResearcherRedirectMove[i];
			if(eduKidRedirectMoveArr.classList.contains("eduKidRedirectMove")){
				eduKidRedirectMoveArr.classList.remove("eduKidRedirectMove");
				eduSpecialRedirectMoveArr.classList.remove("eduSpecialRedirectMove");
				eduAfterRedirectMoveArr.classList.remove("eduAfterRedirectMove");
				eduResearcherRedirectMoveArr.classList.remove("eduResearcherRedirectMove");
			}
		}
	}
}