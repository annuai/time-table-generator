function generateTimeTable(noOfDays,noOfPeriodsPerDay,subjects){
// var noOfDays = 5;
// var noOfPeriodsPerDay = 8;
// var noOfSubjects = 6;
var resultPeriodArray = new Array();
/*var subjects = {
	"subject": [
	{
		"name": "English",
		"noOfTimes": "10"
	},{
		"name": "Malayalam",
		"noOfTimes": "6"
	},{
		"name": "Hindi",
		"noOfTimes": "3"
	},{
		"name": "Maths",
		"noOfTimes": "5"
	},{
		"name": "Physics",
		"noOfTimes": "2"
	},{
		"name": "Chemistry",
		"noOfTimes": "2"
	},{
		"name": "Biology",
		"noOfTimes": "3"
	},{
		"name": "Social Science",
		"noOfTimes": "5"
	},{
		"name": "PET",
		"noOfTimes": "2"
	},{
		"name": "IT",
		"noOfTimes": "2"
	}]
};
*/
// subjects = JSON.parse(subjects);
var periodRepeatCheck = 0;

for(i=0;i<noOfDays;i++){
	resultPeriodArray[i]=new Array();
	periodRepeatCheck = 0;
	
	for(j=0;j<noOfPeriodsPerDay;j++)
	{
		periodRepeatCheck = 0;
		// var period = Math.floor((Math.random() * noOfPeriodsPerDay) + 1);
		var subjectSelector = Math.floor((Math.random() * subjects.subject.length) + 1)-1;
		var period = subjects.subject[subjectSelector].name;
		
		// console.log(resultPeriodArray.length);
		for(g=0;g<resultPeriodArray.length;g++)
		{
			for(h=0;h<resultPeriodArray[g].length;h++)
			{
				if(resultPeriodArray[g][h] == period){
					periodRepeatCheck++;
				}
			}
		}

		// console.log(periodRepeatCheck+" is not less than "+subjects.subject[subjectSelector].noOfTimes)
		if(periodRepeatCheck<subjects.subject[subjectSelector].noOfTimes)
		{
			resultPeriodArray[i][j] = period;
		}
		else{
			// console.log("Check2");
			j--;
			// resultPeriodArray[i][j] = period;
		}
	}
	// console.log("repeat before reset"+periodRepeatCheck);
}
// console.log("repeat"+periodRepeatCheck);
console.log(resultPeriodArray);
return resultPeriodArray;
}