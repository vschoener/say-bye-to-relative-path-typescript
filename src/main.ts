import { GoogleService } from '@src/services/google.service';
import { AwsService } from '@services/aws.service';
import { AwsService as AWS } from '@/services/aws.service';

new AwsService().log('aws service using @services/aws.service');
new GoogleService().call('google service using @src/services/google.service');
new AWS().log('aws service alias using @/services/aws.service');
