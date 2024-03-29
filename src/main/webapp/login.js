let dms2dec = function(lat, latRef, lon, lonRef) {
    let ref = {'N': 1, 'E': 1, 'S': -1, 'W': -1};
    let sep = [' ,', ' ', ','];
    let i;

    if (typeof lat === 'string') {
      for (i = 0; i < sep.length; i++) {
        if (lat.split(sep[i]).length === 3) {
          lat = lat.split(sep[i]);
          break;
        }
      }
    }

    if (typeof lon === 'string') {
      for (i = 0; i < sep.length; i++) {
        if (lon.split(sep[i]).length === 3) {
          lon = lon.split(sep[i]);
          break;
        }
      }
    }

    for (i = 0; i < lat.length; i++) {
      if (typeof lat[i] === 'string') {
        lat[i] = lat[i].split('/');
        lat[i] = parseInt(lat[i][0], 10) / parseInt(lat[i][1], 10);
      }
    }

    for (i = 0; i < lon.length; i++) {
      if (typeof lon[i] === 'string') {
        lon[i] = lon[i].split('/');
        lon[i] = parseInt(lon[i][0], 10) / parseInt(lon[i][1], 10);
      }
    }

    lat = (lat[0] + (lat[1] / 60) + (lat[2] / 3600)) * ref[latRef];
    lon = (lon[0] + (lon[1] / 60) + (lon[2] / 3600)) * ref[lonRef];

    return [lat, lon];
  };
  let dec = dms2dec([19, 4, 33.9240], "N", [72, 52, 38.7336], "E");
  console.log(dec);