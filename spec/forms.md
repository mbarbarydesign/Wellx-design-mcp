# Forms

## Text inputs
40px height, radius-md 8, 1px borders/secondary (Gray/300), 14px text, placeholder Gray/500.
- Label: 13px SemiBold, ABOVE the field (never floating placeholders as labels)
- Help text: 12.5px Gray/500 below
- Focus: brand border + 2px ring at 35% brand opacity
- Error: Error/500 border + 12.5px error message below (validate on blur, not per keystroke)
- Disabled: Gray/50 fill, Gray/400 text
- Selects, date pickers, comboboxes share the exact same frame

## Selection controls
- Checkbox: 18px, radius-xs 4; checked = Brand/500 fill + white check
- Radio: 18px; selected = Brand/500 ring + 8px brand dot
- Toggle: 36×20 full-radius; on = Brand/500 track, off = Gray/200; 16px white knob
- Labels 14px, 10px gap

## Layout
Forms cap at 768px, single column by default. Destructive confirm inputs (type-to-confirm) use the error frame.
