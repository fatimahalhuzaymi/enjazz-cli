import axios from 'axios';
import { baseUrl } from '..';

export async function certificateApproval() {
	const { data: certificate} = await axios.get(baseUrl + 'admin/approval_of_student_certificate');
	const formattedcertificate= certificate.map((c: any) => ({ name: c.name,date:c.data,time:c.time, points: c.points,place:c.place }));
	console.table(formattedcertificate);
}