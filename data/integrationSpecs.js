const url = "http://20.115.88.88";

const integrationSpecs = {
	"data": {
		"author": "Okoronkwo Daniel",
		"date": {
			"created_at": "2025-02-18",
			"updated_at": "2025-02-18"
		},
		"descriptions": {
			"app_description": "A message formatter bot that processes incoming messages and sends back formatted responses.",
			"app_logo": "https://media.tifi.tv/telexbucket/public/logos/formatter.png",
			"app_name": "Message Capitalizer",
			"app_url": "http://20.115.88.88",
			"background_color": "#ffffff"
		},
		"integration_category": "Communication & Collaboration",
		"integration_type": "modifier",
		"is_active": true,
		"key_features": [
			"Receive messages from Telex channels.",
			"Format messages based on predefined templates or logic.",
			"Send formatted responses back to the channel.",
		],
		"permissions": {
			"events": [
				"Receive messages from Telex channels.",
				"Format messages based on predefined templates or logic.",
				"Send formatted responses back to the channel.",
			]
		},
		"settings": [
			{
				"default": "daniel,esther,samuel,john,emmanuel",
				"label": "nameToCapitalize",
				"required": true,
				"type": "multi-select"
			},
		],
		"target_url": "http://20.115.88.88/capitalize-names",
		"tick_url": "https://system-integration.telex.im/format-message",
		"website": "https://telex.im"
	}
}

module.exports = integrationSpecs;