import { helper as buildHelper } from '@ember/component/helper';
import demux from "../../../utils/bbl-demux/util";

export function bblDemux(params) {
  const [bbl] = params;
  return demux(bbl);
}

export default buildHelper(bblDemux);
