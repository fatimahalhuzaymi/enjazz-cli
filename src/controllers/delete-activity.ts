import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl } from '..';

export async function deleteActivity() {
	const { data: activites } = await axios.get(baseUrl + '/admin/attachActivities');
	const formattedActivity = activites.map((c: any) => ({ name: c.name}));
console.table(formattedActivity);


	const { index } = await prompt({
		type: 'number',
		name: 'index',
		message: 'Enter index to delete ',
		filter: (val) => +val,
	});
const activity = activites[index];
	await axios.delete(baseUrl + `/admin/attachActivities/${activity.id}`);
	console.log(`Activity for ${activity.name} has been deleted`);
}