import fs from 'fs';
import {
    Queue
} from './';

/**
 * Use queues to simulate situations when people have to wait
 * in line.
 *
 * ASSIGNING PARTNERS AT A SQUARE DANCE
 * 1. When men and women arrive at a square dance, they
 * enter the dance hall and stand in the line for their
 * gender.
 *
 * 2. As room becomes available on the dancefloor, dance
 * partners are chosen by taking first man and woman in line.
 *
 * 3. The next man and woman move to the front of their
 * respective lines.
 *
 * 4. As dance partners move onto the dance floor, their names
 * are announced.
 *
 * 5. If a couple leaves the floor and there is not both a
 * man and a woman at the front of each line, this fact is
 * announced.
 *
 * Store the names of the men and women participating in
 * the square dance in a text file.
 */
class Dancer {
    public name: string;
    public sex: string;
    constructor(name: string, sex: string) {
        this.name = name;
        this.sex = sex;
    }
}

function readFile(filePath: string) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, (err, content) => {
            if (err) return reject(err);
            return resolve(content);
        });
    });
}

/**
 * Load the dancers from the file into the program
 * @param males
 * @param females
 */
async function getDancers (maleDancers: Queue , femaleDancers: Queue) {
    try {
        const names: Buffer = await readFile('./src/Queue/dance.txt') as Buffer;
        const listOfNames: string[] = names.toString('utf-8').split('\n');
        for (let name of listOfNames) {
            listOfNames[listOfNames.indexOf(name)] = name.trim();
        }

        for (let name of listOfNames) {
            const dancer: string[] = listOfNames[listOfNames.indexOf(name)].split(' ');
            const sex = dancer[0];
            const nameOfDancer = dancer[1]

            if (sex === 'F') {
                femaleDancers.enqueue(new Dancer(nameOfDancer, sex));
            } else {
                maleDancers.enqueue(new Dancer(nameOfDancer, sex));
            }
        }
        return {
            femaleDancers,
            maleDancers
        };
    } catch (err) {
        throw err;
    }
}

function dance(males: Queue, females: Queue) {
    while (!females.isEmpty() && !males.isEmpty()) {
        let person;
        person = females.dequeue();
        console.log('Female dancer is', person.name)
        person = males.dequeue();
        console.log('Male dancer is', person.name);
    }
}

getDancers(new Queue, new Queue)
    .then((value: {
        maleDancers: Queue,
        femaleDancers: Queue
    }) => {
        dance(value.maleDancers, value.femaleDancers);
    })
    .catch((err) => {
        console.log('run error', err);
        return err
    })
