# malga-checkout-full-header

<!-- Auto Generated Below -->

## Properties

| Property    | Attribute    | Description | Type                                                                    | Default     |
| ----------- | ------------ | ----------- | ----------------------------------------------------------------------- | ----------- |
| `backRoute` | `back-route` |             | `string`                                                                | `undefined` |
| `brand`     | `brand`      |             | `string`                                                                | `undefined` |
| `isLoading` | `is-loading` |             | `boolean`                                                               | `false`     |
| `language`  | `language`   |             | `string`                                                                | `undefined` |
| `locale`    | `locale`     |             | `"default" \| "en" \| "en-US" \| "en_US" \| "pt" \| "pt-BR" \| "pt_BR"` | `undefined` |

## Events

| Event            | Description | Type                              |
| ---------------- | ----------- | --------------------------------- |
| `changeLanguage` |             | `CustomEvent<{ value: Locale; }>` |

## Dependencies

### Used by

- [malga-checkout-full](../..)

### Depends on

- checkout-icon
- checkout-dropdown

### Graph

```mermaid
graph TD;
  malga-checkout-full-header --> checkout-icon
  malga-checkout-full-header --> checkout-dropdown
  checkout-dropdown --> checkout-icon
  malga-checkout-full --> malga-checkout-full-header
  style malga-checkout-full-header fill:#f9f,stroke:#333,stroke-width:4px
```

---

_Built with [StencilJS](https://stenciljs.com/)_
