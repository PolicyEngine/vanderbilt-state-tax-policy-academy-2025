import { AgendaItem } from './agenda';

// Parse time string like "12:30 PM - 12:40 PM" to get start time
function parseTimeString(timeStr: string): Date | null {
  const match = timeStr.match(/(\d+):(\d+)\s*(AM|PM)/);
  if (!match) return null;

  let hours = parseInt(match[1]);
  const minutes = parseInt(match[2]);
  const period = match[3];

  if (period === 'PM' && hours !== 12) hours += 12;
  if (period === 'AM' && hours === 12) hours = 0;

  const now = new Date();
  const time = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes);
  return time;
}

// Get end time from time string like "12:30 PM - 12:40 PM"
function parseEndTime(timeStr: string): Date | null {
  const parts = timeStr.split(' - ');
  if (parts.length !== 2) return null;

  const match = parts[1].match(/(\d+):(\d+)\s*(AM|PM)/);
  if (!match) return null;

  let hours = parseInt(match[1]);
  const minutes = parseInt(match[2]);
  const period = match[3];

  if (period === 'PM' && hours !== 12) hours += 12;
  if (period === 'AM' && hours === 12) hours = 0;

  const now = new Date();
  const time = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes);
  return time;
}

export function getCurrentAgendaIndex(agenda: AgendaItem[]): number | null {
  const now = new Date();

  for (let i = 0; i < agenda.length; i++) {
    const item = agenda[i];
    const startTime = parseTimeString(item.time);
    const endTime = parseEndTime(item.time);

    if (startTime && endTime && now >= startTime && now < endTime) {
      return i;
    }
  }

  return null;
}

export function getNextAgendaIndex(agenda: AgendaItem[]): number | null {
  const now = new Date();

  for (let i = 0; i < agenda.length; i++) {
    const item = agenda[i];
    const startTime = parseTimeString(item.time);

    if (startTime && now < startTime) {
      return i;
    }
  }

  return null;
}
