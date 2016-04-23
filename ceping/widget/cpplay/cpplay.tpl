{%script%}
var data = {%json_encode($data)%};
require('cpplay').cpplay('#ceping-play', data);
{%/script%}