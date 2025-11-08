# Roadmap Data Management

## Overview
All roadmap data is now centralized in a single file: `/src/constants/roadmapData.js`

## How to Update Roadmap

### Adding a New Milestone
Edit `/src/constants/roadmapData.js` and add a new object to the `roadmapData` array:

```javascript
{
  id: 11, // Increment the ID
  date: "December 2025",
  title: "Your Milestone Title",
  description: "Your milestone description here",
  status: ROADMAP_STATUS.FUTURE, // or IN_PROGRESS or COMPLETED
  icon: FaRocket, // Choose from FaPlay, FaRocket, FaPlaneDeparture
  className: "vertical-timeline-element--work",
  // Optional: Add custom styling
  titleStyle: "text-[20px] font-bold",
  descriptionStyle: "text-[15px]",
}
```

### Updating an Existing Milestone
Find the milestone by its `id` in the `roadmapData` array and modify its properties:
- `date`: Update the date or date range
- `title`: Change the title
- `description`: Update the description
- `status`: Change between `COMPLETED`, `IN_PROGRESS`, or `FUTURE`

### Changing Status
Update the `status` field to reflect the current state:
- `ROADMAP_STATUS.COMPLETED` - Green icon (rgb(13, 107, 3))
- `ROADMAP_STATUS.IN_PROGRESS` - Medium green icon (rgb(109, 148, 111))
- `ROADMAP_STATUS.FUTURE` - Muted icon (rgb(113, 117, 91))

### Available Icons
Import from `react-icons/fa6`:
- `FaPlay` - Launch/Start icon
- `FaRocket` - Progress/Active icon
- `FaPlaneDeparture` - Future/Upcoming icon
- `FaArrowDown` - Timeline end marker (don't modify)

## Where Roadmap Appears
The roadmap data is used in two locations:
1. **Full Roadmap Page** (`/src/pages/Roadmap/index.jsx`) - Displays all milestones
2. **Homepage Preview** (`/src/components/home/RoadmapSection.jsx`) - Shows first 3 milestones + read more link

Both components automatically update when you modify the data file.

## Example Update Scenario

**Scenario**: January 2025 milestone "Boosters" is now completed

1. Open `/src/constants/roadmapData.js`
2. Find the object with `id: 2` and `title: "Boosters"`
3. Change `status: ROADMAP_STATUS.IN_PROGRESS` to `status: ROADMAP_STATUS.COMPLETED`
4. Update `date` from `"January 2025"` to `"January 2025 - Completed"`
5. Save the file

That's it! Both the full roadmap page and homepage preview will automatically reflect the changes.

## Benefits
- ✅ Single source of truth for all roadmap data
- ✅ No need to update multiple components
- ✅ Consistent styling across all roadmap displays
- ✅ Easy to add, remove, or reorder milestones
- ✅ Type-safe status values
