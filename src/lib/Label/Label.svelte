<script lang="ts">
	type LabelKind = "display" | "headline" | "title" | "label" | "body"
	type LabelSize = "large" | "medium" | "small"
	type LabelType = `${LabelKind}-${LabelSize}`

	export let type: LabelType = "body-medium"

	let className = ""
	export { className as class }

	const kindToElement = {
		"body-small": "p",
		"body-medium": "p",
		"body-large": "p",
		"label-small": "h4",
		"label-medium": "h4",
		"label-large": "h4",
		"title-small": "h3",
		"title-medium": "h3",
		"title-large": "h3",
		"headline-small": "h2",
		"headline-medium": "h2",
		"headline-large": "h2",
		"display-small": "h1",
		"display-medium": "h1",
		"display-large": "h1",
	} as const satisfies Record<LabelType, string>
</script>

<svelte:element
	this={kindToElement[type]}
	class="m3-label label-{type} {className}"
	{...$$restProps}
>
	<slot />
</svelte:element>

<style lang="scss">
	.m3-label {
		font-family: var(--m3-font);

		&.label-display-large {
			font-size: 57px;
			font-weight: normal;
			line-height: 64px;
			letter-spacing: 0;
		}

		&.label-display-medium {
			font-size: 45px;
			font-weight: normal;
			line-height: 52px;
			letter-spacing: 0;
		}

		&.label-display-small {
			font-size: 36px;
			font-weight: normal;
			line-height: 44px;
			letter-spacing: 0;
		}

		&.label-headline-large {
			font-size: 32px;
			font-weight: normal;
			line-height: 40px;
			letter-spacing: 0;
		}

		&.label-headline-medium {
			font-size: 28px;
			font-weight: normal;
			line-height: 36px;
			letter-spacing: 0;
		}

		&.label-headline-small {
			font-size: 24px;
			font-weight: normal;
			line-height: 32px;
			letter-spacing: 0;
		}

		&.label-title-large {
			font-size: 22px;
			font-weight: normal;
			line-height: 28px;
			letter-spacing: 0;
		}

		&.label-title-medium {
			font-size: 16px;
			font-weight: normal;
			line-height: 24px;
			letter-spacing: 0;
		}

		&.label-title-small {
			font-size: 14px;
			font-weight: normal;
			line-height: 20px;
			letter-spacing: 0;
		}

		&.label-label-large {
			font-size: 14px;
			font-weight: 500;
			line-height: 20px;
			letter-spacing: 0.1px;
		}

		&.label-label-medium {
			font-size: 12px;
			font-weight: 500;
			line-height: 16px;
			letter-spacing: 0.5px;
		}

		&.label-label-small {
			font-size: 11px;
			font-weight: 500;
			line-height: 16px;
			letter-spacing: 0.5px;
		}

		&.label-body-large {
			font-size: 16px;
			font-weight: normal;
			line-height: 24px;
			letter-spacing: 0.5px;
		}

		&.label-body-medium {
			font-size: 14px;
			font-weight: normal;
			line-height: 20px;
			letter-spacing: 0.25px;
		}

		&.label-body-small {
			font-size: 12px;
			font-weight: normal;
			line-height: 16px;
			letter-spacing: 0.4px;
		}
	}
</style>
