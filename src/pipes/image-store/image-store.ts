import { Pipe, PipeTransform } from '@angular/core';
import { ENV } from '@app/env';

@Pipe({
	name: 'imageStore',
})
export class ImageStorePipe implements PipeTransform {
	transform(value: string, ...args) {
		if (value && /\S/.test(value)) {
			return ENV.IMAGE_URL + "store/" + value;
		} 
		return '../../assets/imgs/no-image-available-store.png';
	}
}
