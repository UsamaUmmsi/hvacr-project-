# 3D Components Usage Guide

## Available Components

### 1. Simple3DIcon
A simple 3D icon that can replace regular icons.

```jsx
import { Simple3DIcon } from '../Components/ThreeD/Simple3D'

// Usage examples:
<Simple3DIcon type="cube" color="#4A90E2" size={64} />
<Simple3DIcon type="sphere" color="#10B981" size={48} />
```

**Props:**
- `type`: "cube" or "sphere"
- `color`: Any hex color (default: "#4A90E2")
- `size`: Size in pixels (default: 60)
- `className`: Additional CSS classes

### 2. Background3D
Animated 3D background elements for hero sections.

```jsx
import { Background3D } from '../Components/ThreeD/Simple3D'

// Usage:
<Background3D className="opacity-20" />
```

### 3. HVACIcon3D (Advanced)
More detailed HVAC unit 3D model.

```jsx
import { HVACIcon3D } from '../Components/ThreeD/HVACModel'

// Usage:
<HVACIcon3D width={200} height={200} />
```

## Where to Use

1. **Hero Sections**: Replace regular icons with 3D versions
2. **Service Cards**: Add 3D icons to service cards
3. **Background Elements**: Use Background3D for animated backgrounds
4. **Headers**: Replace static icons in section headers

## Performance Notes

- 3D components use WebGL, so use sparingly
- Test on mobile devices for performance
- Consider lazy loading for better initial page load

## Examples in Current Website

- Hero section: Shield icon replaced with 3D cube
- Case Studies: Target icon replaced with 3D sphere
- Background: 3D floating elements in Hero section