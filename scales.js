const NOTES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

const SCALE_INTERVALS = [2, 2, 1, 2, 2, 2, 1];

const getScale = (startNote) => {
    startNote = startNote.toUpperCase();

    indexStartNote = NOTES.indexOf(startNote);

    const DOUBLED_NOTES = NOTES.concat(NOTES);

    let scale = [];

    const ABSOLUTE_INTERVALS = SCALE_INTERVALS.reduce((acc, cur, i) => {
        acc.push(acc[i] + cur)
        return acc;
    }, [0])

    console.log(ABSOLUTE_INTERVALS)

    for(i of ABSOLUTE_INTERVALS) {
        scale.push(DOUBLED_NOTES[indexStartNote + i])
    }

    return scale;
}

const getMajor = (root) => {
    const DOUBLED_NOTES = NOTES.concat(NOTES);

    const ROOT_INDEX = DOUBLED_NOTES.indexOf(root.toUpperCase());

    const MIDDLE_NOTE_INDEX = ROOT_INDEX + 4;
    const END_NOTE_INDEX = ROOT_INDEX + 7;

    return [
        DOUBLED_NOTES[ROOT_INDEX],
        DOUBLED_NOTES[MIDDLE_NOTE_INDEX],
        DOUBLED_NOTES[END_NOTE_INDEX]
    ]
}

const getMinor = (root) => {
    const DOUBLED_NOTES = NOTES.concat(NOTES);

    const ROOT_INDEX = DOUBLED_NOTES.indexOf(root.toUpperCase());

    const MIDDLE_NOTE_INDEX = ROOT_INDEX + 3;
    const END_NOTE_INDEX = ROOT_INDEX + 7;

    return [
        DOUBLED_NOTES[ROOT_INDEX],
        DOUBLED_NOTES[MIDDLE_NOTE_INDEX],
        DOUBLED_NOTES[END_NOTE_INDEX]
    ]
}

NOTES.forEach(note => console.log(getMajor(note)))
NOTES.forEach(note => console.log(getMinor(note)))
