import axios from 'axios';
import { prompt } from 'inquirer';
import { ObjectId } from 'bson';
import { baseUrl, globalData } from '..';

export async function createActivity() {
	const activityData = await prompt([
		{
			type: 'input',
			name: 'activity_name',
			message: 'Enter activity name:',
		},
		{
			type: 'input',
			name: 'activity_points',
			message: 'Enter activity point:',
		},
        {
			type: 'input',
			name: 'activity_date',
			message: 'Enter activity date:',
		},
        {
			type: 'input',
			name: 'activity_hour',
			message: 'Enter activity hour:',
		},
        {
			type: 'input',
			name: 'activity_place',
			message: 'Enter activity place:',
		},



	]);
	
	await axios.put(
	baseUrl + '/admin/attachActivities',
		{
			activity_id: new ObjectId()
			,
			...activityData,
		},
		{
			headers: {
				authorization: 'Bearer '
			},
		}
	);

	console.log(`Activity for ${activityData.activity_name}, has been added ✅`);
}