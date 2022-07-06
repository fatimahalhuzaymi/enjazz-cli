import { prompt } from 'inquirer';
import { createActivity} from '../controllers/create-activity';
import { deleteActivity } from '../controllers/delete-activity';
import { getActivity } from '../controllers/get-activity';
import { searchActivity } from '../controllers/search-activity';
import { updateActivity } from '../controllers/update-activity';
import {getCertificate} from '../controllers/get-certificate';
import {certificateApproval} from '../controllers/certificate_approval';

export async function q2() {
	const { q2Answer } = await prompt({
		type: 'list',
		name: 'q2Answer',
		message: 'Please choose an action!',
		choices: [ 
			
			'1-Activity',
		    '2-Certificate',
			'3- View activity',
			'4- Add new activity ',
			'5- Update activity ',
			'6- Delete activity ',
			'7- Search activity by name',
            '8- Certificate Approval',
			'9- Quit app ',
		],
		filter: (val) => +val[0],
	});

	switch (q2Answer) {
		case 1:
			await getActivity();
			break;
		case 2:
            await getCertificate();
			break;

		case 3:
			await getActivity();
			break;

		case 4:
			await createActivity();
			break;

		case 5:
			await updateActivity();
			break;

		case 6:
			await deleteActivity();
			break;

		case 7:
			await searchActivity();
			break;
        case 8:
			await  certificateApproval()
			break;
		case 9:
			console.log('Byyyye');
			process.exit(0);

		default:
			break;
	}
}