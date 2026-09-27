'use client'

import { motion, MotionConfig } from 'framer-motion'

// Hero illustration: a scanned statement is read, its fields highlighted or redacted,
// and the result lands as rows of a Spark DataFrame. This is the page's one load animation.

type Field = {
  label: string
  kind: 'mark' | 'redact'
  width: string
}

const fields: Field[] = [
  { label: 'Patient', kind: 'redact', width: '58%' },
  { label: 'Date of service', kind: 'mark', width: '34%' },
  { label: 'Diagnosis', kind: 'mark', width: '22%' },
  { label: 'Total due', kind: 'mark', width: '40%' },
]

const rows = [
  { field: 'patient_name', value: '[REDACTED]', redacted: true },
  { field: 'invoice_date', value: '2026-09-14' },
  { field: 'icd10_code', value: 'J45.909' },
  { field: 'total_due', value: '1,284.50 USD' },
]

const FIELD_START = 0.5
const FIELD_STEP = 0.35
const ROWS_START = FIELD_START + fields.length * FIELD_STEP + 0.1

export default function DocToDataFrame() {
  return (
    // reducedMotion="user" drops the movement for people who ask for less motion,
    // without rendering differently on the server and the client
    <MotionConfig reducedMotion="user">
      <div className="relative mx-auto w-full max-w-xl lg:max-w-none" aria-hidden="true">
        {/* The document */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="border-rule relative w-[78%] -rotate-2 rounded-sm border bg-white p-5 shadow-[0_24px_48px_-24px_rgba(17,54,83,0.35)] sm:p-7"
        >
          <div className="flex items-start justify-between">
            <div className="space-y-1.5">
              <div className="bg-ink h-2.5 w-28 rounded-[1px]" />
              <div className="h-1.5 w-20 rounded-[1px] bg-gray-300" />
            </div>
            <span className="text-[10px] font-medium text-gray-500">Statement 0192</span>
          </div>

          <div className="border-rule mt-6 space-y-3.5 border-t pt-5">
            {fields.map((f, i) => (
              <div key={f.label} className="grid grid-cols-[6.5rem_1fr] items-center gap-3">
                <span className="text-[10px] text-gray-500 sm:text-[11px]">{f.label}</span>
                <span className="relative block h-3" style={{ width: f.width }}>
                  <motion.span
                    initial="hidden"
                    animate="shown"
                    variants={{ hidden: { scaleX: 0 }, shown: { scaleX: 1 } }}
                    transition={{
                      delay: FIELD_START + i * FIELD_STEP,
                      duration: 0.35,
                      ease: 'easeOut',
                    }}
                    className={`absolute origin-left ${
                      f.kind === 'redact'
                        ? 'bg-ink inset-0 z-10 rounded-[1px]'
                        : 'bg-marker -inset-x-1 -inset-y-1 -skew-x-6 rounded-[3px]'
                    }`}
                  />
                  <span className="absolute inset-y-[3px] left-0 w-full rounded-[1px] bg-gray-400/70" />
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6 space-y-2">
            <div className="h-1.5 w-full rounded-[1px] bg-gray-200" />
            <div className="h-1.5 w-11/12 rounded-[1px] bg-gray-200" />
            <div className="h-1.5 w-2/3 rounded-[1px] bg-gray-200" />
          </div>
        </motion.div>

        {/* The DataFrame */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.5, ease: 'easeOut' }}
          className="bg-ink-deep relative -mt-16 ml-auto w-[88%] overflow-hidden rounded-lg font-mono text-[11px] text-slate-300 ring-1 shadow-[0_30px_60px_-30px_rgba(10,34,56,0.7)] ring-white/10 sm:-mt-20 sm:text-xs dark:bg-[#12314d]"
        >
          <div className="border-b border-white/10 px-4 py-3 leading-relaxed">
            <span className="text-brand">df</span> = spark.read.format(
            <span className="text-marker">&quot;pdf&quot;</span>).load(
            <span className="text-marker">&quot;s3://claims/&quot;</span>)
          </div>
          <table className="w-full table-fixed text-left">
            <thead className="text-slate-400">
              <tr className="border-b border-white/10">
                <th className="w-[36%] px-4 py-2 font-normal">path</th>
                <th className="w-[30%] px-2 py-2 font-normal">field</th>
                <th className="px-2 py-2 pr-4 font-normal">value</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <motion.tr
                  key={r.field}
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: ROWS_START + i * 0.15, duration: 0.3 }}
                  className="border-b border-white/5"
                >
                  <td className="truncate px-4 py-2 text-slate-400">bill_0192.pdf</td>
                  <td className="truncate px-2 py-2">{r.field}</td>
                  <td
                    className={`truncate px-2 py-2 pr-4 ${r.redacted ? 'text-slate-500' : 'text-white'}`}
                  >
                    {r.value}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: ROWS_START + rows.length * 0.15 + 0.1 }}
            className="px-4 py-2.5 text-slate-500"
          >
            showing 4 of 1,204,318 rows
          </motion.div>
        </motion.div>
      </div>
    </MotionConfig>
  )
}
