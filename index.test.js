import {describe, expect, test} from '@jest/globals';
import { convertArabicNumberToRomanNumber } from './function';
describe('sum module', () => {
    test('adds 1 + 2 to equal 3', () => {
      expect(convertArabicNumberToRomanNumber(3)).toBe("III");
    });
  });