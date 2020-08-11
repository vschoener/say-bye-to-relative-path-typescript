import * as fs from 'fs';

import { GoogleService } from './services/google.service';
import { AwsService } from './services/aws.service';

const user = {
  name: 'john',
  lastname: 'doe',
};

console.log(new AwsService().log('test'));
console.log(new GoogleService().call('test'));
console.log(user);
