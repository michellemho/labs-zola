import { helper as buildHelper } from '@ember/component/helper';
import numeral from 'npm:numeral';

export function numeralFormat(params) {
  const [number, template] = params;
  return numeral(number).format(template);
}

export default buildHelper(numeralFormat);
