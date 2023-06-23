class Puntuations {
  static readonly a = ['à', 'á', 'â', 'ä', 'æ', 'ã', 'å', 'ā'];
  static readonly e = ['è', 'é', 'ê', 'ë', 'ē', 'ė', 'ę'];
  static readonly i = ['î', 'ï', 'í', 'ī', 'į', 'ì'];
  static readonly o = ['ô', 'ö', 'ò', 'ó', 'œ', 'ø', 'ō', 'õ'];
  static readonly u = ['û', 'ü', 'ù', 'ú', 'ū'];
  static readonly n = ['ñ', 'ń'];
}

class Words {
  //Check
  static check(text: string) {
    Object.entries(Puntuations).forEach(([_, value]) => {
      value.forEach((accChar: string) => {
        //throw new Error
        if (text.includes(accChar)) {
          throw new Error(
            `You have "${accChar}" on your projec pls change the word`
          );
        }
      });
    });

    return text;
  }

  //Fix
  static fix(text: string) {
    Object.entries(Puntuations).forEach(([key, value]) => {
      value.forEach((accChar: string) => {
        text = text.replaceAll(accChar, key);
      });
    });

    return text;
  }
}

export default Words;
