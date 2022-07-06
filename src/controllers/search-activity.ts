import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl } from '..';

export async function searchActivity() {
	const query = await prompt([
		{
			type: 'input',
			name: 'activity_name',
			message: 'Enter activity name to search:',
		},
		
	]);

	const { data: register_for_activities } = await axios.get(baseUrl + '/user/register_for_activities', {
		params: query,
	});
	const formattedActivity = register_for_activities.map((c: any) => ({ text: c.text}));
	console.table(formattedActivity);
}