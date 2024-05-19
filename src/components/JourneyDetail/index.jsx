import { BusStop } from '../BusStop';
import './style.css';

export const JourneyDetail = ({ journey }) => {
  return (
    <div className="journey-detail container">
      <h2>Podrobnosti cesty</h2>
      <div className="stops">
        {journey.stops.map((zastavka) => {
          return (
            <BusStop
              name={zastavka.name}
              station={zastavka.station}
              time={zastavka.time}
              key={zastavka.code}
            />
          );
        })}
      </div>
    </div>
  );
};
