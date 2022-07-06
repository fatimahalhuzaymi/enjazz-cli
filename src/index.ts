import { q1 } from './questions/q1';
import { q2} from './questions/q2';
import figlet from 'figlet';
import chalk from 'chalk';

export const baseUrl = 'http://0.0.0.0:3000';
//export let token = '9321';

export const globalData: any = {
	token: '',
};


async function start() {
	console.log(
	chalk.blue.bold(
		figlet.textSync('Welcome to Enjaz',{horizontalLayout:'default'})
	));

   await q1();

	while (true) {
		await q2();
		
		
	}
}

start();
