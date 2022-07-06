import axios from 'axios';
import { baseUrl, globalData } from '..';

export async function getActivity() {
const { data: activites} = await axios.get(baseUrl + 'user/register_for_activities');
	const formattedActivity = activites.map((c: any) => ({ name: c.name,date:c.data,time:c.time, points: c.points,place:c.place }));
	console.table(formattedActivity);
	console.log('');
}
