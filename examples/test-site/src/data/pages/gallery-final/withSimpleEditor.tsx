/**
 * Copyright © 2019 Johnson & Johnson
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { flow } from 'lodash';
import { RichText } from '@bodiless/richtext-ui';
import {
  Strong,
  addClasses,
  withDesign,
} from '@bodiless/fclasses';
import {
  withComponent,
} from '@bodiless/richtext';
import { asBodilessLink } from '@bodiless/components';
import asEditor from '../../../components/Editors/asEditor';
import { asLink } from '../../../components/Elements.token';

const simpleDesign = {
  Bold: withComponent(Strong),
  Italic: addClasses(''),
  Underline: addClasses('underline'),
  Link: flow(asBodilessLink(), asLink),
};

const SimpleEditor = withDesign(simpleDesign)(RichText);
export default asEditor(SimpleEditor);
