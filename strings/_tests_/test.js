const test = require('supertest');

const arrayshulffe = require('../app/scripts/arrayshuffle');

const lengthhelper = require('../app/scripts/length_helper');

const ChallengeOne = require('../app/challengeone');


const ChallengeTwo = require('../app/challengetwo');

beforeAll(async () => {
        console.log('Testando strings');
   });
   afterAll(() => {
    server.close();
    console.log('servidor fechado');
   });

   test('retornar o array embaralhado', () => {
    expect(arrayshuffle()).toMatch(array);
});

test('Calcula o tamanho da linha', () => {
    expect(CalculateLineLength()).toMatch(position);
});

test('Resposta do desafio básico', () => {
    expect(BasicPart1()).toMatch(output);
});

test('Resposta do desafio intermediário', () => {
    expect(IntermediatePart2()).toMatch(output);
});

test('Resposta do desafio intermediário', () => {
    expect(IntermediatePart2()).toMatch(output);
});

test('Resposta do desafio intermediário', () => {
    expect(JustifyContent()).toMatch(output);
});

test('Resposta do desafio intermediário', () => {
    expect(CreateArrayOfSpaces()).toMatch(SpaceArray);
});






