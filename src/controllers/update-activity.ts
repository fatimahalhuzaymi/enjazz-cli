import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl } from '..';

export async function updateActivity() {
	const { data: activites } = await axios.get(baseUrl + 'admin/attachActivities');
	const formattedActivity = activites.map((c: any) => ({ name: c.name, point: c.point, date:c.data,time: c.time, place:c.place}));
	console.table(formattedActivity);

	const { index } = await prompt({
		type: 'number',
		name: 'index',
		message: 'Enter index to update',
		filter: (val) => +val,
	});
	const activity = activites[index];

	const newActivity = await prompt([
		{
			type: 'input',
			name: 'activity_name',
			message: `Enter new name or press enter to keep it as (${activity.name})`,
			filter: (val) => {
				if (val.trim() === '') return activity.name;
				return val;
			},
		},
		{
			type: 'input',
			name: 'activity_points',
			message: `Enter new point or press enter to keep it as (${activity.points})`,
			filter: (val) => {
				if (val.trim() === '') return activity.points;
				return val;
			},
		},

		{
			type: 'input',
			name: 'activity_date',
			message: `Enter new date and name or press enter to keep it as (${activity.data})`,
			filter: (val) => {
				if (val.trim() === '') return activity.data;
				return val;
			},
		},
		

		{
			type: 'input',
			name: 'activity_hour',
			message: `Enter new time and name or press enter to keep it as (${activity.time})`,
			filter: (val) => {
				if (val.trim() === '') return activity.time;
				return val;
			},
		},
	
		{
			type: 'input',
			name: 'activity_place',
			message: `Enter new time and name or press enter to keep it as (${activity.place})`,
			filter: (val) => {
				if (val.trim() === '') return activity.place;
				return val;
			},
		},
	
	]);

	await axios.patch(baseUrl + `/activities/${activity.id}`, newActivity);

	console.log(`Contact for ${newActivity.name}, has been updated ✅`);
}