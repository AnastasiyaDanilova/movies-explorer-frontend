export const EMAIL_VALID = '^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,})+$';

export function getHoursAndMinutes(movieTime) {
    const minutes = movieTime % 60;
    const hours = Math.floor(movieTime / 60);

    if (hours === 0) {
      return `${movieTime} минут`
    }
    return `${hours}ч ${minutes}м`;
  }

export const firstMoviesQuantity = (width) => {
    if (width >= 1280) {
        return 12;
    }
    if (width >= 600) {
        return 8;
    }
    else {
        return 5;
    }
}

export const moreFilmsQuantity = (width) => {
    if (width >= 1280) {
        return 3;
    }
    return 2;
}