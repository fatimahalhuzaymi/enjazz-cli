import axios from 'axios';
import { baseUrl } from '..';

export async function getCertificate() {
	const { data: certificate} = await axios.get(baseUrl + 'user/certificate_upload');
	const formattedcertificate= certificate.map((c: any) => ({ name: c.name,points: c.point }));
	console.table(formattedcertificate);
	
}