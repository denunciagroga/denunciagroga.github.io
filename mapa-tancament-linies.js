---
---

mapaTancamentsMarkers = [
{% for centre in site.data.tancamentLinies %}
    {
        name: "{{ centre.name }}",
        lat: {{ centre.lat }},
        long: {{ centre.long }},
        courses: [
            {% for course in centre.courses %}
                {
                    name: "{{ course.name }}",
                    text: "{{ course.text }}",
                    url: "{{ course.url }}"
                }
            {% endfor %}
        ]
    },
{% endfor %}
]